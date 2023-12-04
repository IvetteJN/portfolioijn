document.addEventListener('DOMContentLoaded', () => {
    const articlesContainer = document.getElementById('articlesContainer');
  
    fetch('./assets/articles.json')
      .then(response => response.json())
      .then(articles => {
        articles.forEach(article => {
          const articleCard = document.createElement('div');
          articleCard.classList.add('col-md-6', 'mb-4');
  
          articleCard.innerHTML = `
            <div class="card">
              <div class="card-header">
                  <h5 class="card-title">${article.title}</h5>
              </div>
              <div class="card-body">
                <p>${article.snippet}</p>
                <button class="btn btn-light read-more">Read more</button>
                <div class="full-content d-none">
                  <div><img class="m-3 rounded-circle" width="200" height="200" src="${article.img}"><div>
                  <p class="card-text">${article.body}</p>
                  <p class="card-date">Published on: ${article.publishDate}</p>
                </div>
              </div>
            </div>
          `;
  
          articlesContainer.appendChild(articleCard);
        });
  
        // Get all read more buttons AFTER creating the cards
        const readMoreButtons = document.querySelectorAll('.read-more');
  
        // Add event listener to each button
        readMoreButtons.forEach(button => {
          button.addEventListener('click', () => {
            // Toggle the visibility of full content
            const fullContent = button.parentElement.querySelector('.full-content');
            fullContent.classList.toggle('d-none');
  
            // Change the button text based on visibility
            if (fullContent.classList.contains('d-none')) {
              button.innerText = 'Read more';
            } else {
              button.innerText = 'Show less';
            }
          });
        });
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  });
  