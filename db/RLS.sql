

-- Table posts
ALTER TABLE posts ENABLE ROW LEVEL SECURITY

CREATE POLICY "Update Post based on ID" ON "public"."posts"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id)

CREATE POLICY "Insert User if Authenticated" ON "public"."user_data"
AS PERMISSIVE FOR INSERT
TO authenticated
WITH CHECK (true)

-- Table user_data
ALTER TABLE user_data ENABLE ROW LEVEL SECURITY

CREATE POLICY "Update User based on ID (Authenticated)" ON "public"."user_data"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING ((auth.uid() = id))
WITH CHECK ((auth.uid() = id))

CREATE POLICY "Insert User if Authenticated" ON "public"."user_data"
AS PERMISSIVE FOR INSERT
TO authenticated
WITH CHECK (true)

-- Table _prisma_migrations

ALTER TABLE _prisma_migrations ENABLE ROW LEVEL SECURITY