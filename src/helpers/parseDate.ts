export default function parseDate(str:any) {
    let mdy = str.split('.');
    return new Date(mdy[2], mdy[1] - 1, mdy[0]);
}