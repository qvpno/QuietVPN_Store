<template>
    <v-app dark>
        <v-app-bar app dense>
            <v-toolbar-title>QuietVPN Store</v-toolbar-title>
            <v-spacer/>
            <v-btn href="/login" class="text-normal" text>Log in</v-btn>
        </v-app-bar>
        <v-content>
            <div id = "infomation">
                <div class="center">
                    <div class="display-2">QuietVPN Store</div>
                </div>
            </div>
        </v-content>
    </v-app>
</template>

<script>
    
</script>

<style>
    #infomation {
        position:absolute;
        left: 50%;
        top: 45%;
        width: 25%;
        min-width: 400px;
        transform: translate(-50%, -50%);
    }
    a {
        text-decoration: none;
    }
</style>