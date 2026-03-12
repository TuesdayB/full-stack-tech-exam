
document.getElementById('nameForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;

    try {
      const response = await fetch(`/api/get-name`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name
        })
      });
      const result = await response.json();

      console.log(result);
      console.log(name);
      if (response.ok) {
        document.getElementById('result').innerHTML = result.name;
      }

    } catch (error) {
        document.getElementById('result').innerHTML = 'Error loading information: ' + error;
    }
  });

async function loadNameInfo() {
    try{
      const response = await fetch('/api/init-emoji');
    } catch (error) {
      document.getElementById('result').innerHTML = 'Error loading name info';
    }
  }

  loadNameInfo();