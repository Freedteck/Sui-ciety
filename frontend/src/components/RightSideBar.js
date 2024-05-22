const RightSideBar = () => {
  return (
    <div className="sidebar right-side-bar">
      <button className="profiles">
        <p className="profile-name">Connect</p>
        {/* <div className="profile-img">
                    <img src="" alt="user avatar" />
                </div> */}
      </button>
      <section className="upcoming">
        <h2>Upcoming</h2>
        <div className="upcoming-feats">
          <div className="feat">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, sapiente.
            </p>
          </div>
          <div className="feat">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, sapiente.
            </p>
          </div>
          <div className="feat">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Corporis, sapiente.
            </p>
          </div>
        </div>
      </section>

      <section className="suggested">
        <h2>Suggested</h2>
        <div className="suggested-memes">
          <div className="card">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/6784753/pexels-photo-6784753.jpeg"
                alt=""
              />
            </div>
            <div className="head-desc">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/6784753/pexels-photo-6784753.jpeg"
                alt=""
              />
            </div>
            <div className="head-desc">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img
                src="https://images.pexels.com/photos/6784753/pexels-photo-6784753.jpeg"
                alt=""
              />
            </div>
            <div className="head-desc">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightSideBar;
