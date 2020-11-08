function array_append(a,b) {
    const lena = array_length(a);
    const lenb = array_length(b);
    let newarray = [];
    for (let i = 0; i < lena; i = i +1){
        newarray[i] = a[i];
    }
    for (let i = lena; i < lenb + lena ; i = i +1) {
        newarray[i] = b[i-lena];
    }
    return newarray;
}

function remove_duplicate(lst) {
	return accumulate((x, y) =>
		pair(x, remove_all(x, y)), null, lst);
}

function array_to_list(A) {
    const start_index = array_length(A) - 1;
    let xs = null;
    for (let i = start_index; i >= 0; i = i - 1) {
        xs = pair(A[i], xs);
    }
    return xs;
}

function list_to_array(xs) {
    let new_array = [];
    function helper(xs,i) {
        if (is_null(xs)) {
            return new_array;
        }
        else if (is_number(head(xs))) {
            new_array[i] = head(xs);
            return helper(tail(xs),i + 1);
        }
        else {
            new_array[i] = list_to_array(head(xs));
            return helper(tail(xs), i + 1);
        }
    }
    return helper(xs,0);
}

function flatten_array(arr) {
    let output = [];
    
    function append_to_output(arr) {
        for (let k = 0; k < array_length(arr); k = k + 1) {
            if (is_array(arr[k])){
                append_to_output(arr[k]);
            } else {
                output[array_length(output)] = arr[k];
            }
        }
        return output;
    }
    
    return append_to_output(arr);
}


function array_remove_all(v, arr) { // non mutated, doesnt work on nested arrays
    let new_array = [];
    for (let i = 0; i < array_length(arr); i = i + 1) {
        const current_item = arr[i];
        if (!equal(current_item, v)) {
            new_array[array_length(new_array)] = current_item;
        } else {}
    }
    return new_array;
}

function array_remove(v, arr) { // non mutated
    let new_array = [];
    let first_instance = true;
    for (let i = 0; i < array_length(arr); i = i + 1) {
        const current_item = arr[i];
        if (first_instance && custom_equal(current_item, v)) {
            first_instance = false;
        } else {
            new_array[array_length(new_array)] = current_item;
        }
    }
    return new_array;
}

function array_remove_all(v, arr) { // non mutated works on nested arrays
    let new_array = [];
    for (let i = 0; i < array_length(arr); i = i + 1) {
        const current_item = arr[i];
        if (!custom_equal(current_item, v)) {
            new_array[array_length(new_array)] = current_item;
        } else {}
    }
    return new_array;
}


function array_remove(v,arr) { // non mutated
    let new_array = [];
    let first_instance = true;
    for (let i = 0; i < array_length(arr); i = i + 1) {
        const current_item = arr[i];
        if (first_instance && equal(current_item, v)) {
            first_instance = false;
        } else {
            new_array[array_length(new_array)] = current_item;
        }
    }
    return new_array;
}

function reverse_array(arr) {
    function helper(arr,start,end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start = start + 1;
            end = end - 1;
        }
        return arr;
    }
    return helper(arr,0,array_length(arr)-1);
}


function array_filter(pred,arr) { // non mutated
    let new_array = [];
    let i = 0;
    let j = 0;
    while (!is_undefined(arr[i])) {
        if (pred(arr[i])) {
            new_array[j] = arr[i];
            i = i + 1;
            j = j + 1;
        }
        else {
            i = i + 1;
        }
    }
    return new_array;
}


function enum_array(start,end) {
    let array = [];
    let i = 0;
    let s = start;
    while (s <= end) {
        array[i] = s;
        i = i + 1;
        s = s + 1;
    }
    return array;
}

function build_array(n,fun) {
    let arr = [];
    function helper(i,start,fun) {
        if (i <= 0) {
            return arr;
        }
        else {
            arr[start] = fun(i);
            return(helper(i-1,start+1,fun));
        }
    }
    return helper(n,0,fun);
}



function d_array_map(f,arr) { //mutated
    const len = array_length(arr);
    for (let i = 0; i < len ; i = i + 1){
        arr[i] = f(arr[i]);
    }
    return arr;
}

function array_map(f,arr) {
    const len = array_length(arr);
    let new_array = [];
    for (let i = 0; i < len ; i = i + 1){
        new_array[i] = f(arr[i]);
    }
    return new_array;
}

function accumulate_array(f, initial, arr) {
    let result = initial;
    for (let i = array_length(arr) - 1; i > -1; i = i - 1) {
        result = f(arr[i], result);
    }
    return result;
}


function array_zip(a1,a2) { //nested arrays

    let new_array =[];
    const len = array_length(a1);
    for (let i = 0; i < len; i = i + 1) {
        new_array[i] = [a1[i],a2[i]];
    }
    return new_array;
}



function array_find_max(arr) {
    return accumulate_array((x,y) =>  x > y ? x : y, -Infinity,arr);
}

function array_find_min(arr) {
    return accumulate_array((x,y) =>  x > y ? y : x, Infinity,arr);
}

// Array Search
function linear_search(A, v) { 
	const len = array_length(A); 
	let i = 0; 
	while (i < len && A[i] !== v) { 
		i = i + 1;
	} 
	return (i < len); 
}
function binary_search(A, v) {
	function search(low, high) { 
		if (low > high) { 
			return false;
		} else { 
			const mid = math_floor((low + high) / 2); 
			return (v === A[mid]) || (v < A[mid] 
				? search(low, mid - 1) 
				: search(mid + 1, high));
			} 
		} 
	return search(0, array_length(A) - 1); 
}

// Array Mutation
function copy_array(A) {
    const len = array_length(A);
    const B = [];
    for (let i = 0; i < len; i = i + 1) {
        B[i] = A[i];
    }
    return B;
}
function swap(A, i, j) { 
	let temp = A[i];
	A[i] = A[j]; 
	A[j] = temp;
}
function reverse_array(A) { 
	const len = array_length(A); 
	const half_len = math_floor(len / 2); 
	for (let i = 0; i < half_len; i = i + 1) { 
		swap(A, i, len - 1 - i);
	} 
}
function zero_matrix(rows, cols) { 
	const M = []; 
	for (let r = 0; r < rows; r = r + 1) { 
		M[r] = []; 
		for (let c = 0; c < cols; c = c + 1) { 
			M[r][c] = 0;
			} 
		} 
	return M; 
}

// Array Sort

//Selection sort
function selection_sort(A) { 
	const len = array_length(A);
	for (let i = 0; i < len - 1; i = i + 1) { 
		let min_pos = find_min_pos(A, i, len - 1); 
		swap(A, i, min_pos);
	} 
}

function find_min_pos(A, low, high) { 
	let min_pos = low; 
	for (let j = low + 1; j <= high; j = j + 1) { 
		if (A[j] < A[min_pos]) { 
		min_pos = j;
		} else {}
	} 
	return min_pos;
}
//Insertion Sort
function insertion_sort(A) { 
	const len = array_length(A);
	for (let i = 1; i < len; i = i + 1) { 
		let j = i - 1; 
		while (j >= 0 && A[j] > A[j + 1]) { 
			swap(A, j, j + 1); 
			j = j - 1;
		} 	
	}
}

//Merge Sort
function merge_sort(A) { 
	merge_sort_helper(A, 0, array_length(A) - 1);
}
function merge_sort_helper(A, low, high) { 
	if (low < high) { 
	const mid = math_floor((low + high) / 2); 
	merge_sort_helper(A, low, mid); 
	merge_sort_helper(A, mid + 1, high); 
	merge(A, low, mid, high);
	} else {} 
}
function merge(A, low, mid, high) { 
	const B = []; // temporary array 
	let left = low; 
	let right = mid + 1; 
	let Bidx = 0;
	while (left <= mid && right <= high) { 
		if (A[left] <= A[right]) { 
			B[Bidx] = A[left]; 
			left = left + 1;
		} else { 
			B[Bidx] = A[right]; 
			right = right + 1;
		} 
		Bidx = Bidx + 1;
	}
	while (left <= mid) {
		B[Bidx] = A[left]; 
		Bidx = Bidx + 1; 
		left = left + 1;
	}
	while (right <= high) { 
		B[Bidx] = A[right]; 
		Bidx = Bidx + 1; 
		right = right + 1;
	}
	for (let k = 0; k < high - low + 1; k = k + 1) { 
		A[low + k] = B[k];
	}
}


function array_zip(a1,a2) {// 1d 
    const new_array = [];
    const len = array_length(a1);
    for (let i = 0; i < len; i = i + 1) {
        new_array[array_length(new_array)] = a1[i];
        new_array[array_length(new_array)] = a2[i];
    }
    return new_array;
}


function index_track(n,arr) {// returns a list of the indexes that n appears in the array in
    let xs = null;
    let i = 0;
    const len = array_length(arr);
    for (let i = len; i > 0 ; i = i - 1) {
        if (n === arr[i]) {
            xs = pair(i,xs);
        }
        else {
            
        }
    }
    return xs;
}


function array_subset(arr){
    const mem = [];
    
    function duplicate_arr(arr){//only works for arrays that contain primitives
        const mem2 = [];
        
        for(let i = 0;i < array_length(arr); i = i + 1){
            mem2[i] = arr[i];
        }
        return mem2;
    }
    
    const len = array_length(arr);
    
    for(let i = 0; i < len; i = i + 1){
        const mem_len = array_length(mem);
        
        for(let j = 0;j < mem_len;j = j + 1){
            const temp = duplicate_arr(mem[j]);
            temp[array_length(temp)] = arr[i];
            mem[mem_len + j] = temp;
        }
        
        mem[array_length(mem)] = [arr[i]];
    }
    
    return mem;
}


function array_permutation(arr){
    
    function duplicate_arr(arr){//only works for arrays that contain primitives
        const mem2 = [];
        
        for(let i = 0;i < array_length(arr); i = i + 1){
            mem2[i] = arr[i];
        }
        return mem2;
    }
    
    function insert(pos, ele, arr){
        const len = array_length(arr);
        
        for(let i = 0; i <= len; i = i + 1){
            if(i === pos){
                const temp = arr[i];
                arr[i] = ele;
                ele = temp;
                pos = i + 1;
            } else {
                continue;
            }
        }
        return arr;
    }
    
    function truncate(pos, arr){
        const mem = [];
        let j = 0;
        for (let i = pos; i < array_length(arr); i = i + 1){
            mem[j] = arr[i];
            
            j = j + 1;
        }
        return mem;
    }
    
    let mem = [];
    let len = array_length(arr);
    
    mem[0] = [arr[0]];
    
    for(let i = 1; i < len; i = i + 1){
        
        const mem_len = array_length(mem);
        
        for(let j = 0; j < mem_len;j = j + 1){
            const temp = duplicate_arr(mem[j]);
            for(let z = 0; z <= array_length(temp); z = z + 1){
                const temp2 = duplicate_arr(temp);
                mem[array_length(mem)] = insert(z, arr[i], temp2);
            }
        }
        mem = truncate(mem_len, mem);
    }

    return mem;
}

function range(arr) {
    let smallest = arr[0];
    let largest = smallest; 
    
    for (let i = 1; i < array_length(arr); i = i + 1) {
        smallest = math_min(arr[i], smallest);
        largest = math_max(arr[i], largest);
    }
    
    return largest - smallest;
}



function transpose(M) { //Creates new matrix
    const rows = array_length(M);
    // Matrix assumed empty; All rows assumed equal length
    const cols = array_length(M[0]);
    
    let mat = [];
    for(let i = 0; i < cols; i = i + 1) {
        mat[i] = [];
        for(let j = 0; j < rows; j = j + 1) {
            mat[i][j] = M[j][i];
        }
    }
    
    return mat;
}

function equal_arrays(a1, a2) {
    if (array_length(a1) !== array_length(a2)) {
        return false;
    } else {
        for (let i = 0; i < array_length(a1); i = i + 1) {
            if (is_array(a1[i]) && is_array(a2[i])) {
                if (!equal_arrays(a1[i], a2[i])) {
                    return false;
                } else {}
            } else if (is_array(a1[i]) && !is_array(a2[i]) || !is_array(a1[i]) && is_array(a2[i])) {
                return false;
            } else if (!equal(a1[i], a2[i])) {
                return false;
            } else {}
        }
        return true;
    }
}

function next_perm(A) {
    const len = array_length(A);
    let k = undefined;
    let l = undefined;
    
    for (let i = 0; i < len - 1; i = i + 1) {
        if (A[i] < A[i + 1]) {k = i;}
        else{}
    }
    
    if (is_undefined(k)) {return undefined;}
    else {}
    
    for (let i = k + 1; i < len; i = i + 1) {
        if (A[k] < A[i]) {l = i;}
        else{}
    }
    
    swap(A, k, l);
    reverse(A, k + 1, len - 1);
}

// Adds array comparison on top of Source's equal function.
function custom_equal(x, y) {
    if (is_array(x) && is_array(y)) {
        return equal_arrays(x, y);
    } else {
        return equal(x, y);
    }
}
