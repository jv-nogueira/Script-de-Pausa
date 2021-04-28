



document.querySelectorAll('.btn.jqx-rc-all.jqx-button.jqx-widget.jqx-fill-state-normal').forEach((item, index) => {
  setTimeout(() => {
		if(item.innerText == 'Registrar marcação de horário') {
        	item.click();      	
		}

  }, 10 * 60000); //alterando as decimais definem os minutos (10 é 10 minutos)

});