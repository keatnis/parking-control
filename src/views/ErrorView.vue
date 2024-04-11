<template>

      <SectionFullScreen >
        
          <div class="space-y-3">
            <h1 class="text-2xl">Unhandled exception</h1>
  
            <p>An Error Occurred</p>
          </div>
  
          <template #footer>
            <BaseButtons>
              <BaseButton label="Done" to="/dashboard" color="danger" />
            </BaseButtons>
          </template>
   
      </SectionFullScreen>
  </template>