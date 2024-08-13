import React from "react";

export const Pricing = () => {
  return (
    <div className="bg-[#0f172a] h-auto text-white ">
      <p>Authentication</p>
      <p>Endpoints</p>
      <p>Tutorial</p>
      <p>Code Examples</p>
       <div className="bg-[#1E293B]  border-solid border-radius-[8px] mx-64 p-8 pt-25 rounded-xl mt-10 ">
        <div>
            <h2 className=" text-[#a5b4fc] font-sans text-3xl font-semibold">API Pricing</h2>
            <p className="text-xl py-2">Our API pricing is based on the model used and the number of tokens processed. 
              Here's a breakdown of the costs:</p>
        </div>
        <div>      
        <div class="bg-[#1E293B] text-white p-7 rounded-lg shadow-lg max-w-screen-lg mx-auto">
    <table class="w-full border-separate border-spacing-0">
        <thead>
            <tr>
                <th class="p-4 bg-[#6366f1] text-left border border-gray-700 rounded-tl-lg">API</th>
                <th class="p-4 bg-[#6366f1] text-left border border-gray-700">MODEL</th>
                <th class="p-4 bg-[#6366f1] text-left border border-gray-700 rounded-tr-lg">PRICE PER 1K TOKENS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-4 border border-gray-700">OpenAI</td>
                <td class="p-4 border border-gray-700">GPT-3.5</td>
                <td class="p-4 border border-gray-700">$0.002</td>
            </tr>
            <tr>
                <td class="p-4 border border-gray-700">OpenAI</td>
                <td class="p-4 border border-gray-700">GPT-4</td>
                <td class="p-4 border border-gray-700">$0.03</td>
            </tr>
            <tr>
                <td class="p-4 border border-gray-700">Together AI</td>
                <td class="p-4 border border-gray-700">Llama-2-70b</td>
                <td class="p-4 border border-gray-700">$0.0008</td>
            </tr>
            <tr>
                <td class="p-4 border border-gray-700 rounded-bl-lg">Together AI</td>
                <td class="p-4 border border-gray-700">Llama-2-13b</td>
                <td class="p-4 border border-gray-700 rounded-br-lg">$0.0006</td>
            </tr>
        </tbody>
    </table>    
</div>          
<h2 className=" text-[#a5b4fc] font-sans text-2xl font-semibold">Token Estimation</h2>
<p className="text-xl py-2">On average, 1 token is approximately 4 characters or 0.75 words. 
  For precise pricing, we recommend using our token calculator tool.</p>
<h2 className=" text-[#a5b4fc] font-sans text-2xl font-semibold pt-2">Billing</h2>        
<p className=" text-xl py-2">You will only be charged for the tokens used in generating the book. 
The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </div>
       </div>
       <p>sanket</p>
    </div>

  )
}
