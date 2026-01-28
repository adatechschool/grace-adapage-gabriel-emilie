import '../App.css'
import {TimelineItemType} from '../interfaces';

interface TimelineItemProps {
    data: TimelineItemType;
}

export const TimeLineItem = ({ data }: TimelineItemProps) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <div className="timeline-header">
                <span className="type" style={{ background: data.category.color }}>
                    {data.category.type}
                </span>
                <time>{data.year}</time>
            </div>
            <div className="timeline-body">
                {data.img && <img src={data.img} alt={data.description} />}
                <h2>{data.description}</h2>
            </div>
            <span className="circle" />
        </div>
    </div>
);