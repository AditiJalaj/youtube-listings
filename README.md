
Youtube Listings App with Local Storage - Used ReactJS, React Hooks and Custom Hooks. Used React-Select for searchable multi-select dropdown.

Demo link - https://youtube-listings.netlify.app/


Demo video - https://www.loom.com/share/bf5a42eca06649fd9c6de3dbbee16a9a

Features - 
- User should be able add youtube video links only
- User should be able to edit the uploaded videos
- While adding/editing following data should be captured and validated, "video url" "title", "description" and "tags"(validate video url to be just a youtube link, no need to verify if it is valid or not)
- Tags will be a searchable multi-select dropdown from a predefined list(or a multi-select typeahead)
- Add/edit form should have a checkbox to mark the video as hidden
- User will see 2 tabs, "All videos" and "Hidden videos"
- "All videos" tab will show all uploaded videos that are not hidden, "Hidden videos" will show videos that are marked as hidden
- Add button should be somewhere on the listing page, and should redirect to a add page. On success of add redirect back to the listing page
- Video listing page will be list of videos uploaded with title and tags as pills. action items will  be hide video, edit(form in pop-up) and go to details
- Video details page will show the video in an iframe(example below). there should be a edit button that should prefill the video details in a form inside of a pop-up to update


Future Updates-
- show video thumbnail on listing page
- User should be able to filter the video by title, description or tags
- Use passport auth with some pre-defined users that can login as uploaders
- uploaders should see my videos tab that shows videos uploaded by them only
- While adding tags, user can type and search the desired value from a pre-defined list. If the value does not exist, it should show the searched text in the result and on selection ot should be appended to the existing list and should show up for subsequent addition/editing.(For example, pre-defined list has "react", "react-native", "react-redux" and user types "react-apollo" it should still show up as a result and the subsequent "react" search should list all four options)
