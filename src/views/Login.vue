<template>
  <v-app>
    <v-content class="color">
        <v-card class="center">
            <v-card-title class="justify-center">
                Log in to QueitVPN Store
            </v-card-title>
            <v-card-subtitle class="justify-center">
                <div>Log in to continue to <a href="/">QuietVPN Store</a>.</div>
            </v-card-subtitle>
            <v-card-text class="justify-center">
                <section id="firebaseui-auth-container"></section>
            </v-card-text>
        </v-card>
    </v-content>
  </v-app>
</template>
<script type="text/javascript">
    import firebase from 'firebase'
    import * as firebaseui from "firebaseui";
    import "firebaseui/dist/firebaseui.css";
    
    export default {
        name: 'auth',
        mounted() {
            var uiConfig = {
                signInSuccessUrl: '/success',
                signInOptions: [
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.GithubAuthProvider.PROVIDER_ID,
                    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
                ]
            };
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }
</script>

<style>
    .v-card {
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 25%;
        min-width: 400px;
    }
    
    @keyframes bgcolor {
        0% { background-color: #45a3e5; }
        30% { background-color: #66bf39; }
        60% { background-color: #eb670f; }
        90% { background-color: #f35; }
        100% { background-color: #864cbf; }
    }

    .color {
        animation: bgcolor 60s infinite;
        animation-direction: alternate;
    }
</style>