document.addEventListener("DOMContentLoaded", function(event) { 
    function header() {
        var div = document.createElement('div');
        div.className = 'py-5 text-center';
        var img = document.createElement('img');
        img.className = 'd-block mx-auto mb-4';
        img.src = 'https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg';
        img.width = 72;
        img.height = 72;
        div.appendChild(img);

        var h2 = document.createElement('h2');
        h2.appendChild(document.createTextNode('Checkout form'));
        div.appendChild(h2);

        var p = document.createElement('p');
        p.className = 'lead';
        p.appendChild(document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.'));
        div.appendChild(p);

        return div;
      }

      function cart(name, description, price, discount=false) {
        var li = document.createElement('li');
        var div = document.createElement('div');
        if (discount) {
          div.className = 'text-success';
          li.className = 'list-group-item d-flex justify-content-between bg-light';
        }
        else {
          li.className = 'list-group-item d-flex justify-content-between lh-condensed';
        }
        var h6 = document.createElement('h6');
        h6.className = 'my-0';
        var small = document.createElement('small');
        small.className = 'text-muted';
        var span = document.createElement('span');
        span.className = 'text-muted';

        h6.appendChild(document.createTextNode(name));
        small.appendChild(document.createTextNode(description));
        div.appendChild(h6);
        div.appendChild(small);
        li.appendChild(div);
        span.appendChild(document.createTextNode(price));
        li.appendChild(span);

        return li;
      }

      function discountCode() {
        var form = document.createElement('form');
        form.className = 'card p-2';
        var div = document.createElement('div');
        div.className = 'input-group';
        form.appendChild(div);
        var input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control';
        input.placeholder = 'Promo code';
        div.appendChild(input);
        var div_button = document.createElement('div');
        div_button.className = 'input-group-append';
        var button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn btn-secondary';
        button.appendChild(document.createTextNode('Redeem'));
        div_button.appendChild(button);
        div.appendChild(div_button);

        return form;            
      }

      
      function shoppingCart() {
        var container = document.createElement('div');
        container.className = 'col-md-4 order-md-2 mb-4';
        var h4 = document.createElement('h4');
        h4.className = 'd-flex justify-content-between align-items-center mb-3';
        var span = document.createElement('span');
        span.className = 'text-muted';
        span.appendChild(document.createTextNode('Your cart'));
        h4.appendChild(span);
        span = document.createElement('span');
        span.className = 'badge badge-secondary badge-pill';
        span.appendChild(document.createTextNode('3'));
        h4.appendChild(span);
        container.appendChild(h4);

        var ul = document.createElement('ul');
        ul.className = 'list-group mb-3';
        ul.appendChild(cart('Product name', 'Brief description', '$12'));
        ul.appendChild(cart('Second Product', 'Brief description', '$8'));
        ul.appendChild(cart('Third item', 'Brief description', '$5'));
        ul.appendChild(cart('Promo code', 'EXAMPLECODE', '-$5', true));

        var total = document.createElement('li');
        total.className = 'list-group-item d-flex justify-content-between';
        var total_span = document.createElement('span');
        total_span.appendChild(document.createTextNode('Total (USD)'));
        var total_price = document.createElement('strong');
        total_price.appendChild(document.createTextNode('$20'));
        total.appendChild(total_span);
        total.appendChild(total_price);
        ul.appendChild(total);


        container.appendChild(ul);
        container.appendChild(discountCode());
        return container;
      }

    
      function footer(text) {
        var li = document.createElement('li');
        li.className = 'list-inline-item';
        var a = document.createElement('a');
        a.href = '#';
        a.appendChild(document.createTextNode(text));
        li.appendChild(a);

        return li;
      }

      
      function foot() {
        var foot = document.createElement('footer');
        foot.className = 'my-5 pt-5 text-muted text-center text-small';
        var p = document.createElement('p');
        p.className = 'mb-1';
        p.appendChild(document.createTextNode('2017-2019 Company Name'));
        foot.appendChild(p);

        var ul = document.createElement('ul');
        ul.className = 'list-inline';
        ul.appendChild(footer('Privacy'));
        ul.appendChild(footer('Terms'));
        ul.appendChild(footer('Support'));
        foot.appendChild(ul);
        
        return foot;
      }

      function formValidation(){
        let div = document.createElement("div");
            div.setAttribute("class", "col-md-8 order-md-1");

        let h4 = document.createElement("h4");
            h4.setAttribute("class", "mb-3");
            h4.innerText = "Billing address";

            div.appendChild(h4);
            
        return div;
    }

    function formData(){
      let form = document.createElement("form");
      form.setAttribute("class", "needs-validation");
      form.noValidate = true;
      
      let row = document.createElement("div");
          row.setAttribute("class", "row");
      
      let colboot = document.createElement("div");
          colboot.setAttribute("class", "col-md-6 mb-3");

      let label = document.createElement("label");
          label.htmlFor = "firstName";
          label.innerText = "First name";
      
      let inputName = document.createElement("input");
          inputName.setAttribute("class", "form-control");
          inputName.setAttribute("type", "text");
          inputName.setAttribute("id","firstName");
          inputName.setAttribute("placeholder","");
          inputName.setAttribute("value","");
          inputName.required = true;

      let validated = document.createElement("div");
          validated.setAttribute("class", "invalid-feedback");
          validated.textContent = "Valid first name is required."

      let col6b = document.createElement("div");
          col6b.setAttribute("class", "col-md-6 mb-3");

      let labelLastname = document.createElement("label");
          labelLastname.htmlFor = "lastName";
          labelLastname.innerText = "Last name";

      let inputLastname = document.createElement("input");
          inputLastname.setAttribute("class", "form-control");
          inputLastname.setAttribute("type", "text");
          inputLastname.setAttribute("id","lastName");
          inputLastname.setAttribute("placeholder","");
          inputLastname.setAttribute("value","");
          inputLastname.required = true;

      let validLastname = document.createElement("div");
          validLastname.setAttribute("class", "invalid-feedback");
          validLastname.textContent = "Valid last name is required.";
          
          colboot.appendChild(label);
          colboot.appendChild(inputName);
          colboot.appendChild(validated);
          
          col6b.appendChild(labelLastname);
          col6b.appendChild(inputLastname);
          col6b.appendChild(validLastname);
          row.appendChild(colboot);
          row.appendChild(col6b);
          
          form.appendChild(row);

          let hr3 = document.createElement("hr");
              hr3.setAttribute("class", "mb-4");

          form.appendChild(hr3);

          let btn = document.createElement("button");
              btn.setAttribute("class", "btn btn-primary btn-lg btn-block");
              btn.setAttribute("type", "submit");
              btn.innerText = "Continue to checkout";

          form.appendChild(btn);
      return form;
  }

  function userName(){
    let div = document.createElement("div");
        div.setAttribute("class", "mb-3");
    
    let label = document.createElement("label");
        label.htmlFor = "username";
        label.innerText = "Username";
    
    let divInp = document.createElement("div");
        divInp.setAttribute("class", "input-group");

    let divInpPre = document.createElement("div");
        divInpPre.setAttribute("class", "input-group-prepend");
    
    let span= document.createElement("span");
        span.setAttribute("class", "input-group-text");
        span.innerText = "@";

    let inputUserName = document.createElement("input");
        inputUserName.setAttribute("class", "form-control");
        inputUserName.setAttribute("type", "text");
        inputUserName.setAttribute("id","username");
        inputUserName.setAttribute("placeholder","Username");
        inputUserName.required = true;

    let validUsername = document.createElement("div");
        validUsername.setAttribute("class", "invalid-feedback");
        validUsername.style.width = "100%";
        validUsername.textContent = "Your username is required.";

    divInpPre.appendChild(span);
    divInp.appendChild(divInpPre);
    divInp.appendChild(inputUserName);
    divInp.appendChild(validUsername);
    div.appendChild(label);
    div.appendChild(divInp);
    return div;
}

      var body = document.getElementsByTagName('body')[0];
      body.className = 'bg-light';
      var container = document.createElement('div');
      container.className = 'container';
      body.appendChild(container);
      container.appendChild(header());
      var row = document.createElement('div');
      row.className = 'row';
      container.appendChild(formValidation())
      container.appendChild(row);
      row.appendChild(shoppingCart());
      row.appendChild(formData());
      row.appendChild(userName());
      container.appendChild(foot());
});