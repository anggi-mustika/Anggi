var rIndex,
                table = document.getElementById("table");
            
            // check the empty input
            function checkEmptyInput()
            {
                var isEmpty = false,
                    Nama = document.getElementById("Nama").value,
                    NPM = document.getElementById("NPM").value,
                    Alamat = document.getElementById("Alamat").value,
                    Email = document.getElementById("Email").value;
            
                if(Nama === ""){
                    alert("Nama Connot Be Empty");
                    isEmpty = true;
                }
                else if(NPM === ""){
                    alert("NPM Connot Be Empty");
                    isEmpty = true;
                }
                else if (Alamat ==="") {
                    alert("Alamat Connot Be Empty")
                    isEmpty = true;
                }
                else if(Email === ""){
                    alert("Email Connot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    Nama = document.getElementById("Nama").value,
                    NPM = document.getElementById("NPM").value,
                    Alamat = document.getElementById("Alamat").value,
                    Email = document.getElementById("Email").value;
            
                cell1.innerHTML = Nama;
                cell2.innerHTML = NPM;
                cell3.innerHTML = Alamat;
                cell4.innerHTML = Email;
                // call the function to set the event to the new row
                selectedRowToInput();
            }
            }
            
            // display selected row data into input text
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("Nama").value = this.cells[0].innerHTML;
                      document.getElementById("NPM").value = this.cells[1].innerHTML;
                      document.getElementById("Alamat").value = this.cells[2].innerHTML;
                      document.getElementById("Email").value = this.cells[3].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var Nama = document.getElementById("Nama").value,
                    NPM = document.getElementById("NPM").value,
                    Alamat = document.getElementById("Alamat").value,
                    Emailt = document.getElementById("Email").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = Nama;
                table.rows[rIndex].cells[1].innerHTML = NPM;
                table.rows[rIndex].cells[2].innerHTML = Alamat;
                table.rows[rIndex].cells[3].innerHTML = Email;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                // clear input text
                document.getElementById("Nama").value = "";
                document.getElementById("NPM").value = "";
                document.getElementById("Alamat").value = "";
                document.getElementById("Email").value = "";
            }