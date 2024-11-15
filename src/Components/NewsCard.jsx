// import React from 'react'
// import { trump } from '../Assets/Data'
// const NewsCard = (props) => {
//     return (
//         <div className='card-section'>
//             <div className="card-poster">
//                 {props.img && <img src={props.img} alt="news" />}
//             </div>
//             <div className="card-main">
//                 <div className='card-title'>
//                     <p className='Title'>{props.title}</p>
//                     <p className='caption'><span style={{ color: "black", fontSize:"bold" }}>sort by </span>{props.author} / {new Date(props.pdate).toLocaleTimeString('en-US', {
//                         hour: '2-digit',
//                         minute: '2-digit',
//                         hour12: true,
//                     })} on {new Date(props.pdate).toLocaleDateString('en-US', {
//                         weekday: 'long',
//                         day: 'numeric',
//                         month: 'long',
//                         year: 'numeric',
//                     })} dolor sit amet consectetur.</p>
//                 </div>
//                 <div className='card-content'>
//                     <article className='content'>
//                         {props.content}
//                     </article>
//                     {props.source && <p className='read-more'>read more at {props.source}</p>}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NewsCard




// 
import React from 'react';

const NewsCard = (props) => {
    const { img, title, author, pdate, content, source, isSelected, onClick } = props;

    return (
        <div
            className={`card-section ${isSelected ? 'selected' : ''}`}
            onClick={onClick}
        >
            <div className="card-poster">
                {img && <img src={img} alt="news" />}
            </div>
            <div className="card-main">
                <div className="card-title">
                    <p className="Title">{title}</p>
                    <p className="caption">
                        <span style={{ color: 'black', fontWeight: 'bold' }}>sort by </span>
                        {author} /{' '}
                        {new Date(pdate).toLocaleTimeString('en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                        })}{' '}
                        on{' '}
                        {new Date(pdate).toLocaleDateString('en-US', {
                            weekday: 'long',
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                        })}{' '}
                        dolor sit amet consectetur.
                    </p>
                </div>
                <div className="card-content">
                    <article className="content">{content}</article>
                    {source && <p className="read-more">read more at {source}</p>}
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
