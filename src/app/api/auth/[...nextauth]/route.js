import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      try {
        // Check if user exists via GET
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`);
        const users = await res.json();
        const existingUser = users.find(u => u.email === user.email);

        // If not exists, create via POST
        if (!existingUser) {
          await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              image: user.image,
              createdAt: new Date(),
            }),
          });
        }

        return true;
      } catch (err) {
        console.error("Error saving user via API:", err);
        return false;
      }
    },

    async session({ session }) {
      try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`);
        const users = await res.json();
        const dbUser = users.find(u => u.email === session.user.email);

        if (dbUser) {
          session.user.id = dbUser._id; // attach MongoDB _id
        }

        return session;
      } catch (err) {
        console.error("Error fetching session user:", err);
        return session;
      }
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
});

export { handler as GET, handler as POST };
