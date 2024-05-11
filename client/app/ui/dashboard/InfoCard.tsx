import { formatNumber } from "@/utils/number";

interface InfoItemProps {
    value: number;
    label: string;
}

export default function InfoCard({ value, label }: InfoItemProps) {
    return (
        <div className="dashboard__info-item">

            <p className="dashboard__info-label">{label}</p>
            <p className="dashboard__info-value">{formatNumber(value)}</p>
        </div>
    )
};