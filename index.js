const { constants } = require('buffer');

var TelegramBot = require('node-telegram-bot-api'),
    bot = new TelegramBot("1299478286:AAFQPLXj0fMAm9mps35HzvFlKCOUWCOGFuI", { polling: true });

bot.onText(/\/start/, (message) => {
    const chatId = message.chat.id;
    const user = message.chat.first_name;

    bot.sendMessage(chatId, `Hello *${user}*!😎\nMy name is *Limimonsters Bot* 🤖.\nIf you want to change your language, push it your language!\n\nHola *${user}*!😎\nMi nombre es *Limimonsters Bot* 🤖.\nElige tu idioma`, {
        parse_mode: "Markdown",
        reply_markup: {
            inline_keyboard: [[
                {
                    text: 'Spanish 🇪🇸',
                    callback_data: 'spanish'
                }, {
                    text: 'English 🇺🇸',
                    callback_data: 'english'
                }
            ]],
            "resize_keyboard": true
        }
    }
    );
    bot.on("callback_query", function onCallbackQuery(accionBoton) {
        var payload = accionBoton.data;
        if (payload == "spanish") {
            bot.editMessageText(`Perfecto 👌 ${user} hablaremos en español\n¿Qué deseas saber de nosotros?`, {
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: '¿Quienes Somos? 👀',
                            callback_data: 'quieneSomos'
                        }, {
                            text: 'Nuestras Ofertas! 🔥',
                            callback_data: 'ofertas'
                        }],
                    [{
                        text: 'Nuestros Servicios! 🧰',
                        callback_data: 'servicios'
                    },
                    {
                        text: 'Cambiar idioma! 🇺🇸',
                        callback_data: 'english'
                    }
                    ]],
                    "resize_keyboard": true
                }
            });
        }
        else if (payload == "english") {
            bot.editMessageText(`Perfect 👌 ${user} We'll speak in English\nWhat do you want to do?`, {
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Who are we? 👀',
                            callback_data: 'whoareWe'
                        },
                        {
                            text: 'Our Offers! 🔥',
                            callback_data: 'offers'
                        }],
                    [
                        {
                            text: 'Our Services! 🧰',
                            callback_data: 'services'
                        },
                        {
                            text: 'Change language! 🇪🇸',
                            callback_data: 'spanish'
                        }
                    ]
                    ],
                    "resize_keyboard": true
                }
            });
        }
        //  CODIGO PARA EL IDIOMA ESPAÑOL
        else if (payload == "quieneSomos") {
            bot.editMessageText(`*SOMOS DESARROLLADORES DE SITIOS WEB QUE CONTESTAMOS EL TELÉFONO 📲!*\nEn limimonster, nos instruimos por nuestros principales valores:\n\n >>> Servicio al cliente responsable 🛎️,\n>>> Experiencia ✔️\n>>> Pasión por lo que hacemos ❤️.`, {
                parse_mode: "Markdown",
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Regresar 🔙',
                            callback_data: 'spanish'
                        }
                    ]]
                }
            });
        }
        else if (payload == "ofertas") {
            bot.editMessageText(`Aqui deberian ir ofertas :V`, {
                parse_mode: "Markdown",
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Regresar 🔙',
                            callback_data: 'spanish'
                        }
                    ]]
                }
            });
        }
        else if (payload == "servicios") {
            bot.editMessageText(`*NUESTROS SERVICIOS 🧰*\n\n*>>> Desarrollo Web: ✏️*\nSoluciones personalizadas que apoyan su negocio a medida que crece.\n\n*>>> Marketing Digital: 🔊*\nLos clientes potenciales prometedores están al alcance de su mano e involucran a su audiencia ideal.\n\n*>>> Soporte Técnico 24/7: 👊*\nSomos un equipo de ingenieros que puede arreglar prácticamente cualquier cosa que pueda salir mal.\n\n*>>> Web Hosting: ☁️*\nMantenga su sitio web seguro, estable y libre de virus, con los mejores proveedores.\n\n*>>> Diseño Web: 🧪*\nResalte la identidad de su marca a través de una experiencia de usuario avanzada.\n\n*>>>Community Manager: 🌐*\nAdemas de un sitio web debes alimentar tu redes sociales.`, {
                parse_mode: "Markdown",
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Regresar 🔙',
                            callback_data: 'spanish'
                        }
                    ]]
                }
            });
        }

        //  CODIGO PARA EL IDIOMA INGLES
        else if (payload == "whoareWe") {
            bot.editMessageText(`*WE ARE WEBSITE DEVELOPERS WHO ANSWER THE PHONE 📲!*\nIn limimonster, we are instructed by our core values:\n\n >>> Responsible customer service 🛎️,\n>>> Experience ✔️\n>> Passion for what we do ❤️.`, {
                parse_mode: "Markdown",
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Go back 🔙',
                            callback_data: 'english'
                        }
                    ]]
                }
            });
        }
        else if (payload == "offers") {
            bot.editMessageText(`Aqui deberian ir ofertas :V pero en ingles :V`, {
                parse_mode: "Markdown",
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Go Back 🔙',
                            callback_data: 'english'
                        }
                    ]]
                }
            });
        }
        else if (payload == "services") {
            bot.editMessageText(`*OUR SERVICES 🧰*\n\n*>>> Web Development: ✏️*\nCustomized solutions that support your business as it grows.\n\n*>>> Digital Marketing: 🔊*\nPromising prospects are at your fingertips and involve your ideal audience. 24/7\n\n*>>> Technical Support: 👊*\nWe are a team of engineers who can fix just about anything that can go wrong. \n\n*>>> Web Hosting: ☁️*\nKeep your website safe, stable and virus free, with the best providers.\n\n*>>> Web Design: 🧪*\nHighlight your brand identity through an advanced user experience.\n\n*>>> Community Manager: 🌐*\nIn addition to a website you must feed your social networks.`, {
                parse_mode: "Markdown",
                chat_id: chatId,
                message_id: accionBoton.message.message_id,
                reply_markup: {
                    inline_keyboard: [[
                        {
                            text: 'Go back 🔙',
                            callback_data: 'english'
                        }
                    ]]
                }
            });
        }



    });
});
