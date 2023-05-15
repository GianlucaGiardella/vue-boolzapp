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
                    messages: [
                        {
                            date: "10/01/2023 15:30:55",
                            text: "Hai portato a spasso il cane?",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:50:00",
                            text: "Ricordati di stendere i panni",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 16:15:22",
                            text: "Tutto fatto!",
                            status: "received",
                            optionsFlag: false
                        }
                    ],
                },
                {
                    name: "Erica",
                    avatar: "img/avatar_2.jpg",
                    messages: [
                        {
                            date: "20/03/2023 16:30:00",
                            text: "Ciao come stai?",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "20/03/2023 16:30:55",
                            text: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                            optionsFlag: false
                        },
                        {
                            date: "20/03/2023 16:35:00",
                            text: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "sent",
                            optionsFlag: false
                        }
                    ],
                },
                {
                    name: "Federico",
                    avatar: "img/avatar_3.jpg",
                    messages: [
                        {
                            date: "28/03/2023 10:10:40",
                            text: "La Marianna va in campagna",
                            status: "received",
                            optionsFlag: false
                        },
                        {
                            date: "28/03/2023 10:20:10",
                            text: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "28/03/2023 16:15:22",
                            text: "Ah scusa!",
                            status: "received",
                            optionsFlag: false
                        }
                    ],
                },
                {
                    name: "Marco",
                    avatar: "img/avatar_4.jpg",
                    messages: [
                        {
                            date: "10/01/2023 15:30:55",
                            text: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:50:00",
                            text: "Si, ma preferirei andare al cinema",
                            status: "received",
                            optionsFlag: false
                        }
                    ],
                },
                {
                    name: "Valerio",
                    avatar: "img/avatar_5.jpg",
                    messages: [
                        {
                            date: "10/01/2023 15:30:55",
                            text: "Ricordati di chiamare la nonna",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:50:00",
                            text: "Va bene, stasera la sento",
                            status: "received",
                            optionsFlag: false
                        }
                    ],
                },
                {
                    name: "Lara",
                    avatar: "img/avatar_6.jpg",
                    messages: [
                        {
                            date: "10/01/2023 15:30:55",
                            text: "Ciao Lara, hai novità?",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:50:00",
                            text: "Non ancora",
                            status: "received",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:51:00",
                            text: "Nessuna nuova, buona nuova",
                            status: "sent",
                            optionsFlag: false
                        }
                    ],
                },
                {
                    name: "Lorenzo",
                    avatar: "img/avatar_7.jpg",
                    messages: [
                        {
                            date: "10/01/2023 15:30:55",
                            text: "Fai gli auguri a Martina che è il suo compleanno!",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:50:00",
                            text: "Grazie per avermelo ricordato, le scrivo subito!",
                            status: "received",
                            optionsFlag: false
                        }
                    ],
                },
                {
                    name: "Giulio",
                    avatar: "img/avatar_8.jpg",
                    messages: [
                        {
                            date: "10/01/2023 15:30:55",
                            text: "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:50:00",
                            text: "No, l\'ho già mangiata ieri, ordiniamo sushi!",
                            status: "sent",
                            optionsFlag: false
                        },
                        {
                            date: "10/01/2023 15:51:00",
                            text: "OK!!",
                            status: "received",
                            optionsFlag: false
                        }
                    ],
                }
            ],

            activeChat: 0,
            newMessage: "",
            inputName: "",
        }
    },
    methods: {
        lastMessage(contact) {
            return contact.messages[contact.messages.length -1].text;
        },

        lastMessageDate(contact) {
            return contact.messages[contact.messages.length -1].date.slice(0, -9);
        },

        messageTime(message) {
            return message.date.slice(11, -3);
        },

        setActiveChat(contact) {
            this.activeChat = this.contacts.indexOf(contact);
        },

        sendMessage(activeChat) {
            const localDate = new Date().toLocaleDateString('en-GB');
            const localTime = new Date().toLocaleTimeString();

            const messageObj = {
                date: `${localDate} ${localTime}`,
                text: this.newMessage,
                status: "sent",
                optionsFlag: false
            };

            this.contacts[activeChat].messages.push(messageObj);
            this.newMessage = "";
            setTimeout(this.receiveMessage, 1000);
        },

        receiveMessage() {
            const localDate = new Date().toLocaleDateString('en-GB');
            const localTime = new Date().toLocaleTimeString();

            const messageObj = {
                date: `${localDate} ${localTime}`,
                text: "Ok",
                status: "received",
                optionsFlag: false
            };
            this.contacts[this.activeChat].messages.push(messageObj);
        },

        deleteMessage(i) {
            this.contacts[this.activeChat].messages.splice(i, 1)
        }
    },
    computed: {
        filteredContacts() {
            let namesArr = [];
            namesArr = this.contacts.filter(contact => contact.name.toLowerCase().includes(this.inputName.toLowerCase()))
            return namesArr;
        }
    }
});

app.mount("#app");