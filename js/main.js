const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      image: "https://unsplash.it/300/300?image=15",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=151",
    author: {
      name: "Phil Philone",
      image: "https://unsplash.it/300/300?image=10",
    },
    likes: 80,
    created: "2021-06-25",
  },
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=161",
    author: {
      name: "Phil Bevone",
      image: "https://unsplash.it/300/300?image=12",
    },
    likes: 80,
    created: "2021-06-25",
  },
];

//MILESTONE2
const container = document.getElementById("container");

posts.forEach((post) => {
  //Crea elemento HTML
  const createdPost = createPostElement(post);
  console.log(createdPost);
  //appende al container
  container.innerHTML += createdPost;
});

//FUNCTIONS
//crea elemento da array
/**
 * Crea elemento DOM per un post
 * @param {object} postObject -> oggetti con dati da inserire nel dom
 * @return{*} -> elemento html
 */
function createPostElement(postObject) {
  const { id, content, author, media, likes, created } = postObject;
  const postElement = `
  <div class="post">
  <div class="post__header">
    <div class="post-meta">
      <div class="post-meta__icon">
        <img
          class="profile-pic"
          src="${author.image}"
          alt="${author.name}"
        />
      </div>
      <div class="post-meta__data">
        <div class="post-meta__author">${author.name}</div>
        <div class="post-meta__time">${created}</div>
      </div>
    </div>
  </div>
  <div class="post__text">
  ${content}
  </div>
  <div class="post__image">
    <img src="${media}" alt="" />
  </div>
  <div class="post__footer">
    <div class="likes js-likes">
      <div class="likes__cta">
        <a class="like-button js-like-button" href="#" data-postid=${id}>
          <i
            class="like-button__icon fas fa-thumbs-up"
            aria-hidden="true"
          ></i>
          <span class="like-button__label">Mi Piace</span>
        </a>
      </div>
      <div class="likes__counter">
        Piace a
        <b id="like-counter-${id}" class="js-likes-counter">${likes}</b> persone
      </div>
    </div>
  </div>
  `;
  return postElement;
}
