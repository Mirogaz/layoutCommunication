<template>
        <svg v-if="id === 'logo'" width="57" height="24" viewBox="0 0 57 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M53.5301 7.65897L40.5347 17.5299L26.4333 9.20735M26.4333 9.20735L39.0416 2.68201M26.4333 9.20735L17.9172 20.3502M26.4333 9.20735L12.1936 4.53454L17.9172 20.3502M17.9172 20.3502L2.68213 15.8156" stroke="#999AF4"/>
            <ellipse cx="17.8066" cy="20.0737" rx="3.92627" ry="3.92627" fill="#FFDC26"/>
            <ellipse cx="12.1108" cy="4.36864" rx="3.48387" ry="3.48387" fill="#68A1FF"/>
            <ellipse cx="2.82028" cy="15.6498" rx="2.82028" ry="2.82028" fill="#FFAF86"/>
            <ellipse cx="39.2627" cy="2.82028" rx="2.82028" ry="2.82028" fill="#FF6868"/>
            <ellipse cx="53.4747" cy="7.41014" rx="3.31797" ry="3.31797" fill="#90C9FF"/>
            <ellipse cx="26.4331" cy="8.95852" rx="4.81106" ry="4.81106" fill="#B3ABE6"/>
            <ellipse cx="40.3686" cy="16.7557" rx="7.18894" ry="7.18894" fill="#7DDF81"/>
        </svg>

        <svg  v-else-if="id === 'plus'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.4168 19.25L11.0002 15.5833L4.5835 19.25V4.58333C4.5835 4.0971 4.77665 3.63079 5.12047 3.28697C5.46428 2.94315 5.9306 2.75 6.41683 2.75H15.5835C16.0697 2.75 16.536 2.94315 16.8799 3.28697C17.2237 3.63079 17.4168 4.0971 17.4168 4.58333V19.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11 6.41663V11.9166" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13.75 9.16663H8.25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else-if="id === 'list'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.3335 4H14.0002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.3335 8H14.0002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.3335 12H14.0002" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 4H2.00646" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 8H2.00646" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12H2.00646" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else-if="id === 'calendar'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="#AEAEAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6665 1.33325V3.99992" stroke="#AEAEAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.3335 1.33325V3.99992" stroke="#AEAEAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 6.66663H14" stroke="#AEAEAE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <svg v-else-if="id === 'calendarGradient'" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="url(#paint0_linear_257_12591)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.6665 1.33325V3.99992" stroke="url(#paint1_linear_257_12591)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.3335 1.33325V3.99992" stroke="url(#paint2_linear_257_12591)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 6.66663H14" stroke="url(#paint3_linear_257_12591)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
            <linearGradient id="paint0_linear_257_12591" x1="2" y1="2.66663" x2="14.8472" y2="3.65503" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6A3093"/>
            <stop offset="1" stop-color="#A044FF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_257_12591" x1="10.6665" y1="1.33325" x2="11.7425" y2="1.3643" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6A3093"/>
            <stop offset="1" stop-color="#A044FF"/>
            </linearGradient>
            <linearGradient id="paint2_linear_257_12591" x1="5.3335" y1="1.33325" x2="6.40954" y2="1.3643" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6A3093"/>
            <stop offset="1" stop-color="#A044FF"/>
            </linearGradient>
            <linearGradient id="paint3_linear_257_12591" x1="2" y1="6.66663" x2="8.97669" y2="13.1077" gradientUnits="userSpaceOnUse">
            <stop stop-color="#6A3093"/>
            <stop offset="1" stop-color="#A044FF"/>
            </linearGradient>
            </defs>
        </svg>


</template>

<script>
export default {
    props: ['id']
}
</script>