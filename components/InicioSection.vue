<template>
    <section class="w-full relative flex flex-col lg:flex-row-reverse justify-center items-center px-2 bg-[url('@/assets/images/office_bg.png')] bg-cover bg-center">
        <div class="w-full absolute bottom-0">
            <div class="max-w-4xl relative mx-auto">
                <img class="w-[50rem] absolute -top-[35rem] -left-[26rem] mix-blend-screen opacity-50 z-40" src="@/assets/images/light_effect.png" />
            </div>
        </div>

        <FloatingWoman />

        <div class="w-full sm:w-fit pt-0 pb-16 lg:py-16 z-50">
            <div class="w-full max-w-[30rem] text-center sm:text-left translate-y-3 flex gap-5 flex-col justify-start items-center sm:items-start border border-lightPeach/30 backdrop-blur-sm bg-gradient-to-bl from-black/30 to-black/30 p-7 sm:p-[38px] rounded-[2rem] z-[9999999]">
                <h1 class="w-full max-w-[27rem] font-poppins text-2xl leading-6 lg:text-3xl font-semibold lg:leading-8 bg-gradient-to-r from-lightPeach from-0% via-pastelOrange to-pastelOrange bg-clip-text text-transparent">
                    É advogado e sente que
                    está preso no mesmo
                    patamar de faturamento?
                </h1>
                <p class="w-full max-w-96 font-poppins text-sm leading-4 font-medium text-snowWhite italic">
                    Descubra como elevar seu escritório de advocacia
                    a um novo nível, fechar contratos de maior valor e
                    conquistar mais tempo para sua vida pessoal.
                </p>
                <div class="flex gap-4 items-center">
                    <span class="block w-1.5 h-1.5 bg-pastelOrange rotate-45 mb-0.5"></span>
                    <p class="font-poppins text-sm font-semibold text-pastelOrange italic">
                        Nesta mentoria exclusiva você aprenderá:
                    </p>
                </div>
                <div class="space-y-4 p-5 sm:p-7 bg-[url('@/assets/images/gradient_rectangle.png')] bg-cover">
                    <div class="w-full flex gap-3 justify-start items-center ">
                        <div class="w-3 sm:w-4 h-3 sm:h-4 border sm:border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="w-full max-w-[20rem] font-poppins text-center sm:text-left text-xs sm:text-sm leading-3 sm:leading-4 font-semibold text-pastelOrange italic">
                            Como indentificar e superar os obstáculos
                            que limitam o seu crescimento financeiro
                        </p>
                    </div>
                    <div class="w-full flex gap-3 justify-start items-center">
                        <div class="min-w-3 sm:min-w-4 min-h-3 sm:min-h-4 w-3 sm:w-4 h-3 sm:h-4 border sm:border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="w-full max-w-[20rem] font-poppins text-center sm:text-left text-xs sm:text-sm leading-3 sm:leading-4 font-semibold text-pastelOrange italic">
                            Estratégias para construir um time eficiente
                            e reduzir sua sobrecarga operacional.
                        </p>
                    </div>
                    <div class="w-full flex gap-3 justify-start items-center">
                        <div class="w-3 sm:w-4 h-3 sm:h-4 border sm:border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="w-full max-w-[20rem] font-poppins text-center sm:text-left text-xs sm:text-sm leading-3 sm:leading-4 font-semibold text-pastelOrange italic">
                            O segredo para transformar seu escritório
                            em uma máquina de lucros na <span class="text-lightPeach">Advocacia
                            de Alta Performance.</span>
                        </p>
                    </div>  
                </div>
                
                <a href="#" class="w-full bg-lightPeach text-deepBlack advocacia-button after:bg-gradient-to-r after:from-transparent after:via-white">
                    Agendar minha sessão de diagnóstico
                    <IconsArrowForward width="22" height="22" stroke="#000" />
                </a>

                <div class="flex flex-col sm:flex-row items-center gap-3  sm:gap-0 mx-auto">
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