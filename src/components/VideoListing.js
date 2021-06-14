import EachVideo from './EachVideo'

const VideoListing = () => {

    //this should have all movies collection load up here
    const arr=[{
        video_url:'test',
        video_title:'1st title',
        video_des:'description',
        video_tag:"selectedTag",
        hidden:"checked"
    },
    {
        video_url:'2nd',
        video_title:'2nd title',
        video_des:'description',
        video_tag:"selectedTag",
        hidden:"checked"
    },
    {
        video_url:'3rd',
        video_title:'3rd title',
        video_des:'description',
        video_tag:"selectedTag",
        hidden:"checked"
    },
]
    //useeffect to get items from backend 

    return ( <>
        {arr && arr.map((i)=>{
            return <EachVideo key={i.video_url} title={i.video_title}
            tag={i.video_tag}
                 />
        })}
        </> );
}
 
export default VideoListing;