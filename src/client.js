import sanityClient from '@sanity/client'

export default sanityClient({
    //we can get the ID inside sanity.json -> api -> projectID
    projectId: "oul3pl5x",
    dataset: "production"
})