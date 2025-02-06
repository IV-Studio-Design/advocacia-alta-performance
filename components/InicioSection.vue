<template>
    <section class="w-full flex justify-end items-center bg-[url('@/assets/images/office_bg.png')] bg-cover bg-center overflow-y-hidden">
        <div class="py-16">
            <div class="w-full max-w-[30rem] translate-y-3 flex gap-5 flex-col justify-start items-start border border-lightPeach/30 backdrop-blur-sm bg-black/50 p-[38px] rounded-[2rem] z-[9999999]">
                <h1 class="font-poppins text-3xl font-semibold leading-8 bg-gradient-to-r from-lightPeach from-0% via-pastelOrange to-pastelOrange bg-clip-text text-transparent">
                    É advogado e sente que <br>
                    está preso no mesmo <br>
                    patamar de faturamento?
                </h1>
                <p class="font-poppins text-sm leading-4 font-medium text-snowWhite italic">
                    Descubra como elevar seu escritório de advocacia <br>
                    a um novo nível, fechar contratos de maior valor e <br>
                    conquistar mais tempo para sua vida pessoal.
                </p>
                <div class="flex gap-4 items-center ">
                    <span class="block w-1.5 h-1.5 bg-pastelOrange rotate-45 mb-0.5"></span>
                    <p class="font-poppins text-sm font-semibold text-pastelOrange italic">
                        Nesta mentoria exclusiva você aprenderá:
                    </p>
                </div>
                <div class="space-y-4 p-7 bg-[url('@/assets/images/gradient_rectangle.png')] bg-cover">
                    <div class="w-full flex gap-3 justify-start items-center">
                        <div class="w-4 h-4 border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="font-poppins text-sm leading-4 font-semibold text-pastelOrange italic">
                            Como indentificar e superar os obstáculos <br>
                            que limitam o seu crescimento financeiro
                        </p>
                    </div>
                    <div class="w-full flex gap-3 justify-start items-center">
                        <div class="min-w-4 min-h-4 w-4 h-4 border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="font-poppins text-sm leading-4 font-semibold text-pastelOrange italic">
                            Estratégias para construir um time eficiente
                            e reduzir sua sobrecarga operacional.
                        </p>
                    </div>
                    <div class="w-full flex gap-3 justify-start items-center">
                        <div class="w-4 h-4 border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="font-poppins text-sm leading-4 font-semibold text-pastelOrange italic">
                            O segredo para transformar seu escritório <br>
                            em uma máquina de lucros na <span class="text-lightPeach">Advocacia <br>
                            de Alta Performance.</span>
                        </p>
                    </div>  
                </div>
                
                <a href="#" class="w-full bg-lightPeach text-deepBlack advocacia-button">
                    Agendar minha sessão de diagnóstico
                    <IconsArrowForward width="22" height="22" stroke="#000" />
                </a>

                <div class="flex items-center mx-auto">
                    <div class="flex">
                        <div class="enter-effect w-6 h-6 rounded-full border-2 border-black overflow-hidden">
                            <img class="w-full h-full object-cover" src="@/assets/images/homem_adv_1.png" />
                        </div>
                        <div class="enter-effect2 w-6 h-6 -translate-x-2 rounded-full border-2 border-black overflow-hidden">
                            <img class="w-full h-full object-cover" src="@/assets/images/homem_adv_2.png" />
                        </div>
                        <div class="enter-effect3 w-6 h-6 -translate-x-4 rounded-full border-2 border-black overflow-hidden">
                            <img class="w-full h-full object-cover" src="@/assets/images/mulher_adv_1.png" />
                        </div>
                    </div>
                    <p class="font-poppins text-xs text-snowWhite">+138 Mentorados faturando acima de 100K por mês</p>
                </div>
            </div>
        </div>

        <FloatingWoman />
    </section>
</template>

<style scoped>
    .check-path {
        clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
    }

    .enter-effect {
        animation: enter 2s ease; 
    }

    .enter-effect2 {
        animation: enter2 2s ease; 
    }

    .enter-effect3 {
        animation: enter3 2s ease; 
    }

    @keyframes enter {
        0% {
            opacity: 0;
            transform: translateX(-20px)
        }
        75% {
            opacity: 0;
            transform: translateX(-20px)
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes enter2 {
        0% {
            opacity: 0;
            transform: translateX(-20px)
        }
        50% {
            opacity: 0;
            transform: translateX(-20px)
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes enter3 {
        from {
            opacity: 0;
            transform: translateX(-30px)
        }
        to {
            opacity: 1;
        }
    }
</style>