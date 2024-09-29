import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup", // Adjust endpoint if needed
        method: "POST",
        body: userData,
      }),
    }),
    getUser: builder.query({
      query: (userId) => ({
        url: `/users/${userId}`, // Replace with the actual endpoint for getting user info
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation, useGetUserQuery } =
  authApi;
