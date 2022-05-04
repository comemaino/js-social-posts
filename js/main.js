const posts = [
  {
    id: 1,
    content:
      "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    media: "https://unsplash.it/600/300?image=171",
    author: {
      name: "Phil Mangione",
      // image: "https://unsplash.it/300/300?image=15",
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

likeBtns.forEach((button, index) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked");

    const clickedPost = posts[index];
    // prelevo id oggetto clickato
    const clickedPostId = clickedPost.id;
    // prelevo da html l'elemento che contiene il numero di likes
    const likeCounter = document.getElementById(
      `like-counter-${clickedPostId}`
    );
    // da questo elemento prelevo numero likes e trasformo in integer
    let likesNumber = parseInt(likeCounter.textContent);
    // se il post clickato non è presente nell'array ->
    if (!likedPosts.includes(clickedPostId)) {
      //cambiare il colore al bottone
      this.classList.add("like-button--liked");
      //incrementare il counter
      // prelevo post clickato dall'array di oggetti tramite index del bottone nell'array
      // incremento numero likes
      likesNumber = likesNumber + 1;
      // riscrivo contenuto elemento html

      // salvo posts likati in nouvo array
      likedPosts.push(clickedPostId);
    } else {
      console.log("togliere il like");
      // togliere colore dal bottone
      this.classList.remove("like-button--liked");
      //decrementare il numero di likes
      likesNumber = likesNumber - 1;

      //togliere l'id del post dall'array likedPosts
      const idIndexInLikedPosts = likedPosts.indexOf(clickedPostId);
      likedPosts.splice(idIndexInLikedPosts, 1);
      console.log(likedPosts);
    }
    likeCounter.innerHTML = likesNumber;
    // salvo nuovo numeri di likes nell'array
    clickedPost.likes = likesNumber;
    console.log(likedPosts);

    // altrimenti
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
      ${
        author.image
          ? createAuthorImage(author)
          : createPlaceholder(author.name)
      }
        
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

// gestire assenza immagine profilo con iniziali

// restituisce elemento immagine
/**
 * restituisce elemento immagine
 * @param {object} authorObject -> oggeto con dati autore
 * @returns {string} -> template string immagine autore
 */
function createAuthorImage(authorObject) {
  const { image, name } = authorObject;
  const authorImage = `<img
  class="profile-pic"
  src="${image}"
  alt="${name}"
/>`;
  return authorImage;
}

//restituisce elemento placeholder
function createPlaceholder(authorName) {
  //otteniamo stringa iniziali autore
  const nameParts = authorName.split(" ");
  console.log(nameParts);
  //prepariamo variabile contenente inizili
  let initials = "";
  //per ogni elemento dell'array
  // - prendiamo prima lettera e concateniamo alla variabile di iniziali
  nameParts.forEach((name) => {
    const firstLetter = name[0];
    initials += firstLetter;
  });
  console.log(initials);
  //creiamo stringa elemento dom
  const placeholder = `
  <div class="profile-pic-default">
  <span>${initials}</span>`;

  return placeholder;
}

createPlaceholder("Phil Mangione");
