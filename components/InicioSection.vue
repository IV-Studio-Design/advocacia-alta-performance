<template>
    <section class="w-full flex justify-end items-center bg-[url('@/assets/images/office_bg.png')] bg-cover bg-center">
        <div class="py-16">
            <div class="w-full max-w-[30rem] translate-y-3 flex gap-5 flex-col justify-start items-start border border-lightPeach/30 backdrop-blur-sm bg-black/50 p-9 rounded-3xl">
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
                    <div class="w-full flex gap-4 justify-start items-center">
                        <div class="w-4 h-4 border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="font-poppins text-sm leading-4 font-semibold text-pastelOrange italic">
                            Como indentificar e superar os obstáculos <br>
                            que limitam o seu crescimento financeiro
                        </p>
                    </div>
                    <div class="w-full flex gap-4 justify-start items-center">
                        <div class="w-4 h-4 border-2 border-softBege rounded">
                            <div class="w-full h-full bg-softBege check-path"></div>
                        </div>
                        <p class="font-poppins text-sm leading-4 font-semibold text-pastelOrange italic">
                            Estratégias para construir um time eficiente <br>
                            e reduzir sua sobrecarga operacional.
                        </p>
                    </div>
                    <div class="w-full flex gap-4 justify-start items-center">
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
                        <div class="w-6 h-6 bg-lightPeach rounded-full border border-white"></div>
                        <div class="w-6 h-6 -translate-x-2 bg-lightPeach rounded-full border border-white"></div>
                        <div class="w-6 h-6 -translate-x-4 bg-pastelOrange rounded-full border border-white"></div>
                    </div>
                    <p class="font-poppins text-xs text-snowWhite">+138 Mentorados faturando acima de 100K por mês</p>
                </div>
            </div>
        </div>

        <div class="w-[45%] relative self-end">
            <img class="shine-effect absolute w-[45rem] -left-52 bottom-32 mix-blend-screen" src="@/assets/images/light_effect.png" />
            <img class="w-[26rem] absolute -left-12 bottom-0 z-50" src="@/assets/images/woman_expert.png" />

            <div class="absolute left-5 bottom-[30rem] scale-90 z-40">
                <NotificationSale class="notificationSale opacity-0" style="animation-delay: 1s" />
            </div>
            <div class="absolute left-56 bottom-72 scale-75 z-50">
                <NotificationSale class="notificationSale opacity-0" style="animation-delay: 3s" />
            </div>
            <div class="absolute left-44 bottom-16 z-50">
                <NotificationSale class="notificationSale opacity-0"  style="animation-delay: 5s" />
            </div>
        </div>
    </section>
</template>

<style scoped>
    .check-path {
        clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
    }

    .shine-effect {
        animation: shine 5s infinite;
        transform: scale(.75);
    }

    @keyframes shine {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(.85)
        }
        100% {
            transform: scale(1);
        }
    }

    .notificationSale {
        animation: swipingUp 7s infinite;
    }

    @keyframes swipingUp {
        0% {
            opacity: 0;
        }
        50% {
            opacity: 0.8;
            transform:translateY(-50px);
            filter: drop-shadow(0px 10px 10px rgba(0,0,0,.3));
        }
        100% {
            opacity: 0;
            transform:translateY(-60px);
        }

    }
</style>