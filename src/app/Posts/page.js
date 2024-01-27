// Below I import necessary stuff //

import Link from "next/link"; // It is important that importing Link happens from NEXT/LINK not from REACT //


// Below I describe my default function //


export default function PostsPage () {  // START of a default function PostPage //

    return (
        <div>
            <h1> Post here, dude! </h1>
            <div className="posts-list">
                <Link href="/Posts/1">Post 01</Link>
                <Link href="/Posts/2">Post 02</Link>
                <Link href ="/Posts/3">Post 03</Link>
            </div>
        </div>
    )

}  // END of a default function PostPage //