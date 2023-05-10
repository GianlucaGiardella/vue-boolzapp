const app = Vue.createApp({
    data() {
        return {
            profile: {
                name: "Gianluca Giardella",
                avatar: "./img/avatar_io.png"
            },

            contacts: [
                {
                    name: "Andrea",
                    avatar: "./img/avatar_1.png",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Annalisa",
                    avatar: "./img/avatar_2.png",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Federico",
                    avatar: "./img/avatar_3.png",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Marco",
                    avatar: "./img/avatar_4.png",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Valerio",
                    avatar: "./img/avatar_5.png",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Lara",
                    avatar: "./img/avatar_6.png",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Lorenzo",
                    avatar: "./img/avatar_7.png",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Giulio",
                    avatar: "./img/avatar_8.png",
                    visible: true,
                    messages: [],
                },
            ],
        }
    },
});

app.mount("#app");