<template>
  <div>
    <h1>Login</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Login with Google</button></p>
  </div>
</template>

<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

import { ref } from "vue";
const email = ref("");
const password = ref("");
const errMsg = ref("");
const router = useRouter();

const register = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully logged in");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      switch (errMsg.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
      }
    });
};
const signInWithGoogle = () => {};
</script>
