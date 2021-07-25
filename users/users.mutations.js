import client from "../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username: username,
            },
            {
              email: email,
            },
          ],
        },
      });
      const encryptedPassword = await bcrypt.hash(password, 2);
      console.log(encryptedPassword);
      return client.user.create({
        data: {
          username,
          email,
          firstName,
          lastName,
          password: encryptedPassword,
        },
      });
    },
  },
};
