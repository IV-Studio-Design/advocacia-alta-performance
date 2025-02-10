<template>
    <section class="w-full bg-gradient-to-r from-lightPeach to-pastelOrange relative overflow-x-clip px-2">
        <div class="w-full h-full flex flex-col lg:flex-row lg:gap-3 justify-center items-center bg-[url('@/assets/images/building_bg.png')] bg-cover bg-center">
            <div class="w-96 h-full relative lg:self-end pt-5 lg:pt-0">
                <img class="w-[40rem] absolute bottom-44 -right-10 mix-blend-screen z-40" src="@/assets/images/light_effect.png" />
                <img class="w-80 lg:w-[25rem] z-50" src="@/assets/images/statue.png">
            </div>
            <div class="space-y-10 pt-5 pb-20 lg:py-20 z-50">
                <p class="sm:w-[33rem] font-poppins font-light text-base sm:text-lg leading-4 sm:leading-5 text-center lg:text-left">
                    Descubra como transformar a internet
                    em sua maior aliada para <i class="font-semibold">alavancar exponencialmente
                    o crescimento do seu escritório.</i> utilizando uma estrátegia
                    testada e aprovada por mim e meus mentorados, com
                    resultados comprovados.
                </p>
                <div class="flex justify-center lg:justify-start items-start">
                    <div class="grid gap-x-4 gap-y-5 grid-cols-1 sm:grid-cols-2">
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl py-3">
                            <img class="w-7" src="@/assets/images/icons/money-bag.svg" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Saiba como faturei um milhão <br>
                                    de reais em cinco meses o meu <br>
                                    escritório de advocacia.
                                </i>
                            </p>
                        </div>
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl px-2 py-3">
                            <IconsCog width="32" height="32" fill="#000" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Aprenda a sair de mero operador <br>
                                    do Direito e passe a ser gestor, <br>
                                    com mais tempo para a sua família <br>
                                    e liberdade diária.
                                </i>
                            </p>
                        </div>
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl py-3">
                            <img class="w-8" src="@/assets/images/icons/networking.svg" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Amplie seu networking com <br>
                                    uma comunidade de advogados <br>
                                    bem sucedidos de todo o Brasil;
                                </i>
                            </p>
                        </div>
                        <div class="w-62 flex gap-2 justify-center items-center border-2 border-deepBlack rounded-xl py-3">
                            <IconsReceipt width="32" height="32" fill="#000" />
                            <p class="font-poppins font-medium text-[10px] leading-3">
                                <i>
                                    Fure a bolha dos 30 mil mensais <br>
                                    e aplique minha orientações <br>
                                    diárias para chegar ao próximo <br>
                                    nível de faturamento.
                                </i>
                            </p>
                        </div>
                    </div>
                </div>
                <p class="sm:w-[35rem] font-poppins font-light text-base sm:text-lg leading-4 sm:leading-5 text-center lg:text-left">
                    Dê o primeiro passo rumo á transformação do seu escritório.
                    <i class="font-semibold">Agende agora uma sessão de diagnóstico exclusivo</i> com 
                    nosso time e descubra os passos essenciais para ingressar
                    definitivamente na <i class="font-semibold">Advocacia de Alta de Performance.</i>
                </p>
                <a href="#" class="mx-auto lg:mx-0 sm:w-96 bg-neutral-700 text-lightPeach advocacia-button after:bg-gradient-to-r after:from-transparent after:via-neutral-400">
                    Agendar minha sessão de diagnóstico
                    <IconsArrowForward width="22" height="22" stroke="#ffd4b5" />
                </a>
            </div>
        </div>

        <div class="w-full absolute bottom-0">
            <div class="max-w-4xl relative mx-auto">
                <img class="w-[50rem] absolute -bottom-[30rem] -right-[26rem] mix-blend-screen opacity-90 z-40" src="@/assets/images/light_effect.png" />
            </div>
        </div>
    </section>
</template>