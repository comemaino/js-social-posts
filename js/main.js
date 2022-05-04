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
    likes: 60,
    created: "2021-06-25",
  },
  {
    id: 2,
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
    id: 3,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=161",
    author: {
      name: "Phil Bevone",
      image: "https://unsplash.it/300/300?image=12",
    },
    likes: 90,
    created: "2021-06-25",
  },
];

//MILESTONE2
const container = document.getElementById("container");

posts.forEach((post) => {
  //Crea elemento HTML
  const createdPost = createPostElement(post);
  // console.log(createdPost);
  //appende al container
  container.innerHTML += createdPost;
});

const likedPosts = [];

const likeBtns = document.querySelectorAll(".js-like-button");
console.log(likeBtns);
likeBtns.forEach((button, index) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");
    //cambiare il colore al bottone
    this.classList.add("like-button--liked");
    //incrementare il counter
    // prelevo post clickato dall'array di oggetti tramite index del bottone nell'array
    const clickedPost = posts[index];
    // prelevo id oggetto clickato
    const clickedPostId = clickedPost.id;
    // prelevo da html l'elemento che contiene il numero di likes
    const likeCounter = document.getElementById(
      `like-counter-${clickedPostId}`
    );
    // da questo elemento prelevo numero likes e trasformo in integer
    let likesNumber = parseInt(likeCounter.textContent);
    // incremento numero likes
    likesNumber = likesNumber + 1;
    // riscrivo contenuto elemento html
    likeCounter.innerHTML = likesNumber;
    // salvo nuovo numeri di likes nell'array
    clickedPost.likes = likesNumber;

    // salvo posts likati in nouvo array
    likedPosts.push(clickedPostId);
    console.log(likedPosts);
  });
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
        <div class="post-meta__time">${formatDate(created)}</div>
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

/**
 * prende stringa data in us format trasforma in it format
 * @param {string} originalDate -> data us format
 * @returns {string} -> data in it format
 */
function formatDate(originalDate) {
  // const usDateArray = originalDate.split("-");
  // console.log(usDateArray);
  // const reversedDateArray = usDateArray.reverse();
  // const itDateString = reversedDateArray.join("/");

  const itDateString = originalDate.split("-").reverse().join("/");
  console.log(itDateString);
  return itDateString;
}

formatDate("2022-05-04");
