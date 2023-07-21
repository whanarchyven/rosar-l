export default function formatDate(date: Date) {
    const monthNames = ["01", "02", "03", "04", "05", "06",
        "07", "08", "09", "10", "11", "12"
    ];
    return `${date.getDate()}.${monthNames[date.getMonth()]}.${date.getFullYear()}`
}