export default function Count({ value, label }) {
    if (`${value}`.length < 2) {
        value = `0${value}`;
    }

    return (
        <div>
            <div>{value}</div>
            <p>{label}</p>
        </div>
    );
}
