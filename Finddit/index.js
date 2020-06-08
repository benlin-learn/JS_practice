import reddit from './redditapi';
(function () {
  const searchForm = document.querySelector('#search-form');
  const searchInput = document.querySelector('#search-input');
  // Form event Listener
  searchForm.addEventListener('submit', (e) => {
    const searchTerm = searchInput.value;
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // const nsfw = document.querySelector('input[name="nsfw"]:checked').value;
    const searchLimit = document.querySelector('#limit').value;

    if (searchTerm === '') {
      // Show Message
      showMessage('Please add a search term', 'alert-danger');
    }

    // Clear Input
    searchInput.value = '';

    // Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy).then((results) => {
      console.log(results);
      let output = '<div class="card-columns">';
      results.forEach((post) => {
        // Check for image
        let image = post.preview
          ? post.preview.images[0].source.url
          : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';

        output += `
        <div class="card">
          <img src="${image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">${truncateText(post.selftext, 100)}</p>
            <a href="${
              post.url
            }" target="_blank" class="btn btn-primary">Read more</a>
            <hr/>
            <span class="badge badge-secondary">Subreddit: ${
              post.subreddit
            }</span>
            <span class="badge badge-dark">Score: ${post.score}</span>
          </div>
        </div>
        `;
      });

      output += '</div>';
      document.querySelector('#results').innerHTML = output;
    });

    // console.log(searchLimit);
    e.preventDefault();
  });
  // console.log(searchInput.value);
  // console.log(inlineRadio1.checked);
  // console.log(inlineRadio2.checked);
  // console.log(limit.value);

  // Show Message
  function showMessage(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className} mt-3`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const searchContainer = document.getElementById('search-container');
    // Get search
    const search = document.getElementById('search');
    // Insert div to parent
    searchContainer.insertBefore(div, search);
    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  // Truncate Text
  function truncateText(text, limit) {
    const shortened = text.indexOf(' ', limit);
    if (shortened == -1) return text;
    return text.substring(0, shortened);
  }
})();
