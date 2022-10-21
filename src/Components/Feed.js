import { useState } from 'react';
import React from 'react';
import Menu from './Menu';
import Block from './Block';

const Feed = () => {
    /* TODO: Declare a new state variable to keep track of the blocks on your Blockstagram feed! */
    // Refer to Hint 2 for more help!
    const [post, setPosts] = useState([]);

    /* Use the map() function to render multiple Blocks! */
    const posts = post.map((post) => {
        return (<Block color={post.color} />);
    });
    return (
        <div>
            <Menu handleClick={(color) => setPosts([{color: color}].concat(post))}></Menu>
            {posts}
        </div>
    );
}

export default Feed;