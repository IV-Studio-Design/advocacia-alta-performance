<template>
    <div class="w-[21rem] h-16 bg-zinc-400/70 rounded-2xl">
        <div class="w-full h-full flex justify-start p-3">
            <div class="min-w-10 w-10 h-full bg-[#b400db] flex justify-center items-center rounded-md">
                <img class="min-w-5 w-5" src="@/assets/images/icons/logo_nubank.svg" />
            </div>
            <div class="w-full flex justify-between ml-3">
                <div>
                    <p class="text-xs text-white font-poppins font-medium">Transfêrencia Recebida!</p>
                    <p class="text-[11px] text-white font-poppins font-light leading-3">
                        Você recebeu uma transfêrencia de <br>
                        {{ 
                            Math.floor(Math.random() * (20000 - 5000) + 5000).toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            })
                        }}
                        de Luíz Carlos Freitas
                    </p>
                </div>
                <p class="text-[11px] text-white font-poppins font-light">Agora</p>
            </div>
        </div>
        
    </div>
</template>