const Memes = () => {
  const memes = [
    {
      authorName: "Alice",
      image:
        "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg",
      description: "Beautiful sunset view from the hilltop!",
      timeOfPost: "2024-05-21T12:30:00", // Example format: YYYY-MM-DDTHH:MM:SS
      numberOfLikes: 150,
      memeMedia:
        "https://images.pexels.com/photos/6784753/pexels-photo-6784753.jpeg",
    },
    {
      authorName: "Bob",
      image: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg",
      description: "Enjoying a cup of coffee on a rainy day.",
      timeOfPost: "2024-05-20T15:45:00",
      numberOfLikes: 230,
      memeMedia:
        "https://images.pexels.com/photos/8112579/pexels-photo-8112579.jpeg",
    },
    {
      authorName: "Charlie",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      description: "Exploring the streets of a new city!",
      timeOfPost: "2024-05-19T09:20:00",
      numberOfLikes: 320,
      memeMedia:
        "https://images.pexels.com/photos/8112651/pexels-photo-8112651.jpeg",
    },
    {
      authorName: "Alice",
      image:
        "https://images.pexels.com/photos/3775540/pexels-photo-3775540.jpeg",
      description: "Beautiful sunset view from the hilltop!",
      timeOfPost: "2024-05-21T12:30:00", // Example format: YYYY-MM-DDTHH:MM:SS
      numberOfLikes: 150,
      memeMedia:
        "https://images.pexels.com/photos/6784753/pexels-photo-6784753.jpeg",
    },
    {
      authorName: "Bob",
      image: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg",
      description: "Enjoying a cup of coffee on a rainy day.",
      timeOfPost: "2024-05-20T15:45:00",
      numberOfLikes: 230,
      memeMedia:
        "https://images.pexels.com/photos/8112579/pexels-photo-8112579.jpeg",
    },
    {
      authorName: "Charlie",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      description: "Exploring the streets of a new city!",
      timeOfPost: "2024-05-19T09:20:00",
      numberOfLikes: 320,
      memeMedia:
        "https://images.pexels.com/photos/8112651/pexels-photo-8112651.jpeg",
    },
  ];

  const reversedMemes = memes.reverse();

  return (
    <section className="memes">
      <h2>Recent Memes</h2>
      <div className="memes-cards">
        {reversedMemes.map((meme, index) => (
          <div className="meme" key={index}>
            <div className="owner">
              <div className="owner-img">
                <img src={meme.image} alt="meme" />
              </div>
              <p>{meme.authorName}</p>
            </div>
            <div className="meme-img">
              <img src={meme.memeMedia} alt="" />
            </div>
            <div className="socials">
            <i class="fa-regular fa-thumbs-up"></i>
            <i class="fa-regular fa-message"></i>
            <i class="fa-regular fa-heart"></i>
            </div>
            <p>{meme.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Memes;
