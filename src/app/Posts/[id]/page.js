export default function SinglePostPage ({ params }) {  // START of default function ..//
    // Here we might make an API call to get the post wiht the id that watches params.id //
return (
    <div>
        <h2>Individual post {params.id}</h2>
        <p>content content content content content content content</p>
        <p>Params is in this page, an object iwth a property called "id"</p>
        <p>This is b3cause we called our folder [id].</p>
        <p>We can replace the second paret of the URL with ANYTHING and it will become params.id</p>

    </div>
);



} // .. END of default function. //
