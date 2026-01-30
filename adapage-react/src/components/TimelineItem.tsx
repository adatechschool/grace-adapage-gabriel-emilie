import '../App.css'
import type {TimelineItemData} from '../interfaces';
import { formatTitle } from '../components/FormatTitleFilm';

export const TimeLineItem = ({ data }: { data: TimelineItemData }) =>  (
    
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
                <h2 dangerouslySetInnerHTML={{ __html: formatTitle(data.description) }} /> 
            </div>
            <span className="circle" />
        </div>
    </div>
);