function obtenerDatos() {
			fetch('https://collectionapi.metmuseum.org/public/collection/v1/departments')
	  .then(response => {
	    if (!response.ok) {
	      throw new Error('Network response was not ok');
	    }
	    return response.json();
	  })
	  .then(data => {
	    console.log('Data received:', data);

	    let departments = Object.values(data);

	    let result = `<div class="table-responsive"><table class='table table-striped table-bordered table-hover text-center'><thead class=table-dark>
                              <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                
                              </tr>
                              </thead><tbody>`;
	    	        

	    for (let i=0; i<departments[0].length; i++){
	    	console.log(departments[0][i].departmentId);
	    	console.log(departments[0][i].displayName);
	    	result += `<tr>
                        <td class=v-align-middle>${departments[0][i].departmentId}</td>
                        <td class=v-align-middle>${departments[0][i].displayName}</td>
                        
                      </tr>`
	    }

	    result += `</tbody></table></div>`;
        document.getElementById("tabladatos").innerHTML = result;
	  })

	  .catch(error => {
	    console.error('There was a problem with the fetch operation:', error);
	  });

}

   