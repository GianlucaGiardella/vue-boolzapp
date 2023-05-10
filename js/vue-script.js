const app = Vue.createApp({
    data() {
        return {
            profile: {
                name: "Gianluca Giardella",
                avatar: "img/avatar_io.jpg"
            },

            contacts: [
                {
                    name: "Simone",
                    avatar: "img/avatar_1.jpg",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Erica",
                    avatar: "img/avatar_2.jpg",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Federico",
                    avatar: "img/avatar_3.jpg",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Marco",
                    avatar: "img/avatar_4.jpg",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Valerio",
                    avatar: "img/avatar_5.jpg",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Lara",
                    avatar: "img/avatar_6.jpg",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Lorenzo",
                    avatar: "img/avatar_7.jpg",
                    visible: true,
                    messages: [],
                },
                {
                    name: "Giulio",
                    avatar: "img/avatar_8.jpg",
                    visible: true,
                    messages: [],
                },
            ],
        }
    },
});

app.mount("#app");