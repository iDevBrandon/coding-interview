import Post from './Post';

const Feed = ({ posts }) => {
    console.log(posts)
    return (
        <>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </>
    )
}

export default Feed
