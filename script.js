$(function() {
        var count = 0;
        var tasks = [];
        const filter = {
            searchText: ''
        };

        const renderTasks = function(tasks, filter){
            const filteredNotes = tasks.filter(function (note){
                return note.toLowerCase().includes(filter.searchText.toLowerCase())
            })
            
            document.querySelector('.items').innerHTML = ''
        
            filteredNotes.forEach(function(note){
                var add = '<div class="task"><p class="text">' + note + '</p><button class="task-btn"><img src="images/cross.png" class="task-img" alt="options"></button></div>';
                $('.items').append(add);
            })
        };

        function updateSearchText(){
            $('.search-bar input').keyup(function(){
                    filter.searchText = $('.search-bar input').val();
                    renderTasks(tasks, filter);
                    console.log(filter.searchText);
                });
        };

        updateSearchText();
        renderTasks(tasks, filter);

        console.log(filter.searchText);

        function addItem(){
            var addedItem = $('input[name=add]').val();
            var add = '<div class="task"  data-id="' + count + '"><p class="text">' + addedItem + '</p><button class="task-btn"><img src="images/cross.png" class="task-img" alt="options"></button></div>'
            $('.items').append(add);
            count++;
            tasks.push(addedItem);
            console.log(tasks);
        };

        $('.add-bar button').click(function(){
            console.log('clicked');
            addItem();
            $('.add-bar input').val('');
            $('.add-bar input').focus();
        });

        $('.add-bar input').keyup(function(e){
            if(e.keyCode === 13){
                addItem();
                $('.add-bar input').val('');
            };
        });

        $('.items').on('click', '.task-btn', function(){
            console.log('clicked');
            $(this).parent().remove();
            var id = $(this).parent().attr('data-id');
            
            tasks.splice(id,1);

            console.log(id);
        });

});
