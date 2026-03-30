

const promptQrCode = [
    {
        name: "link",
        description: "Digite o link para gerar o Qr Code"
    },
    {
        name: "type",
        description: "Escolha entre o tipo de Qr code: (1- Normal ou 2- Terminal",
        pattern: /^[1-2]+$/
    }
];

export default promptQrCode;