<template>
    <v-app>
        <v-app-bar app dense elevation="0" v-if="!this.loading&&this.online" style="left: 0" ref="appbar">
            <v-app-bar-nav-icon @click.stop="drawerShown = !drawerShown"/>
            <v-spacer/>
            <v-btn href="/logout" class="text-normal" text>Log out</v-btn>
        </v-app-bar>
        <v-navigation-drawer v-if="!this.loading&&this.online&&!drawerShown" app permanent clipped expand-on-hover>
            
        </v-navigation-drawer>
        <v-navigation-drawer v-if="!this.loading&&this.online&&drawerShown" app permanent clipped expand-on-hover>
            
        </v-navigation-drawer>
        <v-content app>
            
        </v-content>
    </v-app>
</template>

<script>
    import {Firebase, router} from "@/main";

    export default {
        data: function() {
            return {
                drawerShown: false,
                tru: true
            }
        },
        computed: {
            loading(){return this.$store.state.socket.loading},
            online(){return this.$store.state.app.online},
            fragment(){return document.hash}
        },
        methods: {
            hideDrawer(){
                this.drawerShown = false
            }
        },
        mounted: function() {
            if (!document.location.hash) { router.push({ path: "/app#explore" }) }
            let self = this;
            function setAuth(user) {
                if (!user) { router.push("/login"); return; }
                user.getIdToken(false).then(
                    (token) => {
                        self.$store.commit("auth_set", {auth: token})
                    }
                )
            }
            Firebase.auth().onAuthStateChanged(setAuth);
        }
    }
</script>