

const CreateShedule = () => {

    const handleCreateSchedule =  (e) => {
        e.preventDefault();
            
        const day = e.target.day.value;
        const date = e.target.date.value;
        const start_time = e.target.start_time.value;
        const end_time = e.target.end_time.value;
    
        const createData = {day,date,start_time,end_time};

    }

    return (
        <div className="mt-[40px]">
            <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 class="text-[30px] text-black text-center font-semibold">Create Docotr Schedule</h2>

    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Day</label>
                <input name="day" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Date</label>
                <input name="date" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">Start Time</label>
                <input name="start_time" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>


            <div>
                <label class="text-gray-700 dark:text-gray-200" for="username">End Time</label>
                <input name="end_time" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

        
        </div>

        <div class="flex justify-end mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Create</button>
        </div>
    </form>
</section>
        </div>
    );
};

export default CreateShedule;