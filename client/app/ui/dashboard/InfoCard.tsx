interface InfoItemProps {
    value: any;
    label: string;
}

export default function InfoCard({ value, label }: InfoItemProps) {
    return (
        <div className="dashboard__info-item">

            <p className="dashboard__info-label">{label}</p>
            <p className="dashboard__info-value">{value}</p>
        </div>
    )
};