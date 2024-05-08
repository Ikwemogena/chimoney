interface InfoItemProps {
    value: string;
    label: string;
}

export default function InfoCard({ value, label }: InfoItemProps) {
    return (
        <div className="dashboard__info-item">
            <h3 className="dashboard__info-value">{value}</h3>
            <p className="dashboard__info-label">{label}</p>
        </div>
    )
};