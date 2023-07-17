export default function datediff(first:any, second:any) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}